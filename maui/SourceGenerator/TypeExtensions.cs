using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace SourceGenerator;

internal static class TypeExtensions
{
    public static string GetNamespaceName(this Type type)
    {
        if (type.Namespace?.Length > 0)
        {
            return type.Namespace + "." + type.GetJSTypeName();
        }
        return type.GetJSTypeName();
    }

    public static string GetJSTypeName(this Type type)
    {
        return type.Name.Replace("`", "_");
    }

    public static string GetJSType(this Type type, Assembly callingAssembly)
    {
        type = Nullable.GetUnderlyingType(type) ?? type;

        if (type.IsGenericTypeDefinition)
        {
            return type.GetJSTypeName();
        }

        if (type.IsGenericTypeParameter || type.ContainsGenericParameters)
        {
            return "any";
        }

        if (type.IsByRef || type.IsByRefLike)
        {
            return "any";
        }


        if (!type.IsEnum)
        {
            var tc = Type.GetTypeCode(type);

            switch (tc)
            {
                case TypeCode.Boolean:
                    return "boolean";
                case TypeCode.Char:
                    return "string";
                case TypeCode.SByte:
                    return "number";
                case TypeCode.Byte:
                    return "number";
                case TypeCode.Int16:
                    return "number";
                case TypeCode.UInt16:
                    return "number";
                case TypeCode.Int32:
                    return "number";
                case TypeCode.UInt32:
                    return "number";
                case TypeCode.Int64:
                    return "number";
                case TypeCode.UInt64:
                    return "number";
                case TypeCode.Single:
                    return "number";
                case TypeCode.Double:
                    return "number";
                case TypeCode.Decimal:
                    return "number";
                case TypeCode.DateTime:
                    return "Date";
                case TypeCode.String:
                    return "string";
            }
        }
        if (callingAssembly != type.Assembly)
        {
            return "any";
        }

        var name = type.GetNamespaceName();
        name = name.Replace(".", "_");
        return name;

    }

}
