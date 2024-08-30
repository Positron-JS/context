using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace SourceGenerator;

internal static class MethodExtensions
{

    internal static string GetJSParameters(this MethodBase method, Assembly a)
    {
        return string.Join(",", method.GetParameters().Select(p => {

            return $"{p.Name}: {p.ParameterType.GetJSType(a)}";
        }));
    }

}
