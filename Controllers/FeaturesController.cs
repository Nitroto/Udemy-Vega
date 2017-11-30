namespace vega.Controllers
{
    using AutoMapper;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Core.Models;
    using Resources;
    using Persistence;

    public class FeaturesController : Controller
    {
        private readonly VegaDbContext _context;
        private readonly IMapper _mapper;

        public FeaturesController(VegaDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET
        [HttpGet("/api/features")]
        public async Task<IEnumerable<KeyValuePairResource>> GetFeatures()
        {
            var features = await _context.Features.ToListAsync();

            return _mapper.Map<List<Feature>, List<KeyValuePairResource>>(features);
        }
    }
}