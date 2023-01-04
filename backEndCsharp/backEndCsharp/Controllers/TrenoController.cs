using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using backEndCsharp.DbContex;
using backEndCsharp.Models;

namespace backEndCsharp.Controllers
{
    public class TrenoController : Controller
    {
        private readonly DbAngularLibroContext _context;

        public TrenoController(DbAngularLibroContext context)
        {
            _context = context;
        }

        // GET: Treno
        public async Task<IActionResult> Index()
        {
              return View(await _context.Trenos.ToListAsync());
        }

        // GET: Treno/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.Trenos == null)
            {
                return NotFound();
            }

            var treno = await _context.Trenos
                .FirstOrDefaultAsync(m => m.Id == id);
            if (treno == null)
            {
                return NotFound();
            }

            return View(treno);
        }

        // GET: Treno/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Treno/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Linea,Direzione,NumChatting,Tempo,Stazione,Carrozza")] Treno treno)
        {
            if (ModelState.IsValid)
            {
                _context.Add(treno);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(treno);
        }

        // GET: Treno/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.Trenos == null)
            {
                return NotFound();
            }

            var treno = await _context.Trenos.FindAsync(id);
            if (treno == null)
            {
                return NotFound();
            }
            return View(treno);
        }

        // POST: Treno/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Linea,Direzione,NumChatting,Tempo,Stazione,Carrozza")] Treno treno)
        {
            if (id != treno.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(treno);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!TrenoExists(treno.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(treno);
        }

        // GET: Treno/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.Trenos == null)
            {
                return NotFound();
            }

            var treno = await _context.Trenos
                .FirstOrDefaultAsync(m => m.Id == id);
            if (treno == null)
            {
                return NotFound();
            }

            return View(treno);
        }

        // POST: Treno/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Trenos == null)
            {
                return Problem("Entity set 'DbAngularLibroContext.Trenos'  is null.");
            }
            var treno = await _context.Trenos.FindAsync(id);
            if (treno != null)
            {
                _context.Trenos.Remove(treno);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool TrenoExists(int id)
        {
          return _context.Trenos.Any(e => e.Id == id);
        }
    }
}
