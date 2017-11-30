using vega.Core;

namespace vega.Persistence
{
    using System.Threading.Tasks;
    
    public class UnitOfWork : IUnitOfWork
    {
        private readonly VegaDbContext _context;

        public UnitOfWork(VegaDbContext context)
        {
            _context = context;
        }

        public async Task CompleteAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}