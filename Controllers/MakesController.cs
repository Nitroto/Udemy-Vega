namespace vega.Controllers
{
    using System.Threading.Tasks;
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using AutoMapper;
    using Persistence;
    using Resources;
    using Core.Models;

    public class MakesController : Controller
    {
        private readonly VegaDbContext _context;
        private readonly IMapper _mapper;

        public MakesController(VegaDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET
        [HttpGet("/api/makes")]
        public async Task<IEnumerable<MakeResource>> GetMakes()
        {
            var makes = await _context.Makes.Include(m => m.Models).ToListAsync();

            return _mapper.Map<List<Make>, List<MakeResource>>(makes);
        }
    }
}