using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SourceGenerator;

public class AssemblyInfo
{
    public AssemblyInfo(string name,
        AssemblyInfo? parent = null,
        Type? type = null
        )
    {
        this.Parent = parent;
        this.Name = name;
        this.Fullname = parent == null
            ? this.Name
            : $"{parent.Fullname}.{this.Name}";
        this.Type = type;

        //if (this.Parent != null)
        //{
        //    var c = this.Parent.Children ??= new Dictionary<string, AssemblyInfo>();
        //    // c[this.Name] = this;
        //}
    }

    public AssemblyInfo? Parent { get; }
    public string Name { get; }
    public string Fullname { get; }
    public Type? Type { get; }

    public Dictionary<string, AssemblyInfo>? Children { get; private set; }

    public Type Resolve(string name)
    {
        if (Children == null)
        {
            throw new InvalidOperationException($"Type {name} not found in {this.Fullname}");
        }
        if (Children.TryGetValue(name, out var value))
        {
            if (value.Type != null)
            {
                return value.Type;
            }
        }
        throw new InvalidOperationException($"Type {name} not found in {this.Fullname}");
    }

    internal AssemblyInfo GetOrCreate(string token)
    {
        this.Children ??= new();
        return this.Children.GetOrCreate(token, (x) => new AssemblyInfo(x, this));
    }

    internal void AddType(Type type)
    {
        this.Children ??= new();
        this.Children.Add(type.Name, new AssemblyInfo(type.Name, this, type));
    }

    public override string ToString()
    {
        var sb = new StringBuilder();
        var tb = new IndentedTextWriter(new StringWriter(sb));
        this.Print(tb);
        return sb.ToString();
    }

    private void Print(IndentedTextWriter sb)
    {

        var hasName = this.Name != null && this.Name.Length > 0;
        if (hasName) {
            var name = this.Name;
            if (this.Type != null)
            {
                name = this.Type.GetJSTypeName();
            }
            sb.Write($"{name}: ");
        }
        if (this.Type != null) {
            sb.WriteLine($"typeof {this.Type.GetJSType(this.Type.Assembly)};");
            return;
        }
        if (this.Children != null)
        {
            sb.WriteLine("{");
            sb.Indent++;
            foreach (var child in this.Children.Values)
            {
                child.Print(sb);
            }
            sb.Indent--;
            sb.WriteLine("}");
        }
    }
}

