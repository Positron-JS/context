using System.Reflection;
using System.Text;

namespace SourceGenerator;

internal class Program
{
    static void Main(string[] args)
    {
        var input = args[0];

        var generated = Build(input);

        System.IO.File.WriteAllText(input + ".ts", generated);
    }

    static string Build(string assemblyName)
    {

        var a = Assembly.Load(assemblyName);

        var classNames = new StringBuilder();

        classNames.AppendLine($"export interface I{assemblyName.Replace(".", "_")} {{");

        var sb = new StringBuilder();

        foreach(var type in a.GetExportedTypes()) {

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

            var fullClassName = type.GetJSType(a);

            var extends = "";

            classNames.AppendLine($"\t\"{type.GetNamespaceName()}\": typeof {fullClassName}");

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

            sb.AppendLine($@"
        }}

                ");
        }


        classNames.AppendLine("}");

        sb.AppendLine();
        sb.AppendLine();
        sb.AppendLine(classNames.ToString());

        return sb.ToString();
    }
}
