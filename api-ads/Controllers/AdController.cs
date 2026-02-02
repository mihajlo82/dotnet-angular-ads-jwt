using api_ads.Domain;
using api_ads.Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api_ads.Controllers
{
    [ApiController]
    [Route("api/[controller]")]   // base route: api/ad
    public class AdController : ControllerBase  // <-- Use ControllerBase
    {
        private readonly AppDbContext _context;

        public AdController(AppDbContext context)
        {
            _context = context;
        }

        // GET api/ad
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ad>>> GetAds()
        {
            return await _context.Ads.ToListAsync();
        }

        // GET api/ad/{id}
        [HttpGet("{id:guid}")]
        public async Task<ActionResult<Ad>> GetAd(Guid id)
        {
            var ad = await _context.Ads.FindAsync(id);
            if (ad == null) return NotFound();
            return ad;
        }

        // POST api/ad
        [Authorize]
        [HttpPost]
        public async Task<ActionResult<Ad>> CreateAd(Ad ad)
        {
            _context.Ads.Add(ad);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAd), new { id = ad.Id }, ad);
        }

        // PUT api/ad/{id}
        [Authorize]
        [HttpPut("{id:guid}")]

        public async Task<IActionResult> UpdateAd(Guid id, Ad ad)
        {
            if (id != ad.Id) return BadRequest();

            _context.Entry(ad).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE api/ad/{id}
        [Authorize]
        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> DeleteAd(Guid id)
        {
            var ad = await _context.Ads.FindAsync(id);
            if (ad == null) return NotFound();

            _context.Ads.Remove(ad);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
