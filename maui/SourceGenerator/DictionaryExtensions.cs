namespace SourceGenerator;

internal static class DictionaryExtensions
{

    public static TValue GetOrCreate<TKey, TValue>(this IDictionary<TKey, TValue> @this, TKey key, Func<TKey, TValue> factory)
    {
        if (@this.TryGetValue(key, out TValue? value))
        {
            return value;
        }
        value = factory(key);
        @this[key] = value;
        return value;
    }
}

