using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PallidromeApp.Models;

namespace PallidromeApp.Controllers
{
    [Produces("application/json")]
    [Route("api/Pallindromes")]
    [ApiController]
    public class PallindromesController : ControllerBase
    {
        private readonly PallindromeContext _context;

        public PallindromesController(PallindromeContext context)
        {
            _context = context;
        }

        // GET: api/Pallindromes
        [HttpGet]
        public IEnumerable<Pallindrome> GetPallindromes()
        {
            return _context.Pallindromes;
        }

        // GET: api/Pallindromes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPallindrome([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pallindrome = await _context.Pallindromes.FindAsync(id);

            if (pallindrome == null)
            {
                return NotFound();
            }

            return Ok(pallindrome);
        }

        // PUT: api/Pallindromes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPallindrome([FromRoute] long id, [FromBody] Pallindrome pallindrome)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pallindrome.PallindromeId)
            {
                return BadRequest();
            }

            _context.Entry(pallindrome).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PallindromeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Pallindromes
        [HttpPost]
        public async Task<IActionResult> PostPallindrome([FromBody] Pallindrome pallindrome)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Pallindromes.Add(pallindrome);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPallindrome", new { id = pallindrome.PallindromeId }, pallindrome);
        }

        // DELETE: api/Pallindromes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePallindrome([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pallindrome = await _context.Pallindromes.FindAsync(id);
            if (pallindrome == null)
            {
                return NotFound();
            }

            _context.Pallindromes.Remove(pallindrome);
            await _context.SaveChangesAsync();

            return Ok(pallindrome);
        }

        private bool PallindromeExists(long id)
        {
            return _context.Pallindromes.Any(e => e.PallindromeId == id);
        }
    }
}