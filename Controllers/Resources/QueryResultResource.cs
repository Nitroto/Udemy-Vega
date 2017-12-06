namespace vega.Controllers.Resources
{
    using System.Collections.Generic;

    public class QueryResultResource<T>
    {
        public int TotalItems { get; set; }

        public IEnumerable<T> Items { get; set; }
    }
}