namespace SourceGenerator;

internal static class StringExtensions
{
    public static string ToCamelCase(this string str)
    {
        return Char.ToLower(str[0]) + str.Substring(1);
    }

}
