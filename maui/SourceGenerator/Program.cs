using System.Reflection;
using System.Text;

namespace SourceGenerator;

internal class Program
{
    static void Main(string[] args)
    {
        var input = args[0];

        var generated = Build(input);

        Console.WriteLine(generated);
    }

    static string Build(string assemblyName)
    {

        var a = Assembly.Load(assemblyName);

        var ai = new AssemblyInfo("");

        var sb = new StringBuilder();

        foreach(var type in a.GetExportedTypes()) {

            if (type.Namespace == null || type.Namespace.Length == 0)
            {
                continue;
            }

            if (type.IsEnum)
            {

                sb.AppendLine($"export type {type.GetJSType(a)} = ");
                var i = 0;
                foreach (var field in Enum.GetNames(type))
                {
                    if (i++>0)
                    {
                        sb.Append("|");
                    }
                    sb.AppendLine(System.Text.Json.JsonSerializer.Serialize(field));
                }
                sb.AppendLine(";");

                continue;
            }

            var ns = ai;
            foreach(var token in type.Namespace.Split("."))
            {
                ns = ns.GetOrCreate(token);
            }
            ns.AddType(type);

            var fullClassName = type.GetJSType(a);

            var extends = "";

            sb.AppendLine($@"
    // {type.GetNamespaceName()}
    export declare class {fullClassName} {extends} {{");

            foreach (var property in type.GetProperties( BindingFlags.DeclaredOnly | BindingFlags.Static | BindingFlags.Public ))
            {
                if (property.CanRead)
                {
                    sb.AppendLine($"\t\t\tstatic get {property.Name.ToCamelCase()}(): {property.PropertyType.GetJSType(a)}");
                }
                if (property.CanWrite)
                {
                    sb.AppendLine($"\t\t\tstatic set {property.Name.ToCamelCase()}(v: {property.PropertyType.GetJSType(a)});");
                }
            }





            foreach (var property in type.GetProperties(BindingFlags.DeclaredOnly | BindingFlags.Instance | BindingFlags.Public))
            {
                if (property.CanRead)
                {
                    sb.AppendLine($"\t\t\tget {property.Name.ToCamelCase()}(): {property.PropertyType.GetJSType(a)}");
                }
                if (property.CanWrite)
                {
                    sb.AppendLine($"\t\t\tset {property.Name.ToCamelCase()}(v: {property.PropertyType.GetJSType(a)});");
                }
            }

            foreach (var field in type.GetFields(BindingFlags.DeclaredOnly | BindingFlags.Static | BindingFlags.Public))
            {
                sb.AppendLine($"\t\t\tstatic {field.Name.ToCamelCase()}: {field.FieldType.GetJSType(a)}");
            }


            foreach (var field in type.GetFields(BindingFlags.DeclaredOnly | BindingFlags.Instance | BindingFlags.Public))
            {
                sb.AppendLine($"\t\t\t{field.Name.ToCamelCase()}: {field.FieldType.GetJSType(a)}");
            }

            foreach (var c in type.GetConstructors(BindingFlags.DeclaredOnly | BindingFlags.Public))
            {
                sb.AppendLine($"\t\t\tconstructor({ c.GetJSParameters(a)});");
            }


            foreach (var method in type.GetMethods(BindingFlags.DeclaredOnly | BindingFlags.Static | BindingFlags.Public))
            {
                if (method.IsSpecialName)
                {
                    continue;
                }
                sb.AppendLine($"\t\t\tstatic {method.Name.ToCamelCase()}({method.GetJSParameters(a)}): {method.ReturnType.GetJSType(a)}");
            }


            foreach (var method in type.GetMethods(BindingFlags.DeclaredOnly | BindingFlags.Instance | BindingFlags.Public))
            {
                if (method.IsSpecialName)
                {
                    continue;
                }
                sb.AppendLine($"\t\t\t{method.Name.ToCamelCase()}({method.GetJSParameters(a)}): {method.ReturnType.GetJSType(a)}");
            }


            sb.AppendLine($@"
        }}
");
        }



        sb.AppendLine();
        sb.AppendLine();

        sb.AppendLine(@$"export default interface I{assemblyName.Replace(".", "_")} {ai.ToString()}");

        return sb.ToString();
    }
}
