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
    public class MessaggiChatController : Controller
    {
        private readonly DbAngularLibroContext _context;

        public MessaggiChatController(DbAngularLibroContext context)
        {
            _context = context;
        }

        // GET: MessaggiChat
        public async Task<IActionResult> Index()
        {
              return View(await _context.MessaggiChat.ToListAsync());
        }

        // GET: MessaggiChat/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.MessaggiChat == null)
            {
                return NotFound();
            }

            var messaggiChat = await _context.MessaggiChat
                .FirstOrDefaultAsync(m => m.Id == id);
            if (messaggiChat == null)
            {
                return NotFound();
            }

            return View(messaggiChat);
        }

        // GET: MessaggiChat/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: MessaggiChat/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Idt,Idu,Idm,IdDestinatario,Testo,Stato")] MessaggiChat messaggiChat)
        {
            if (ModelState.IsValid)
            {
                _context.Add(messaggiChat);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(messaggiChat);
        }

        // GET: MessaggiChat/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.MessaggiChat == null)
            {
                return NotFound();
            }

            var messaggiChat = await _context.MessaggiChat.FindAsync(id);
            if (messaggiChat == null)
            {
                return NotFound();
            }
            return View(messaggiChat);
        }

        // POST: MessaggiChat/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Idt,Idu,Idm,IdDestinatario,Testo,Stato")] MessaggiChat messaggiChat)
        {
            if (id != messaggiChat.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(messaggiChat);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!MessaggiChatExists(messaggiChat.Id))
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
            return View(messaggiChat);
        }

        // GET: MessaggiChat/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.MessaggiChat == null)
            {
                return NotFound();
            }

            var messaggiChat = await _context.MessaggiChat
                .FirstOrDefaultAsync(m => m.Id == id);
            if (messaggiChat == null)
            {
                return NotFound();
            }

            return View(messaggiChat);
        }

        // POST: MessaggiChat/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.MessaggiChat == null)
            {
                return Problem("Entity set 'DbAngularLibroContext.MessaggiChat'  is null.");
            }
            var messaggiChat = await _context.MessaggiChat.FindAsync(id);
            if (messaggiChat != null)
            {
                _context.MessaggiChat.Remove(messaggiChat);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool MessaggiChatExists(int id)
        {
          return _context.MessaggiChat.Any(e => e.Id == id);
        }
    }
}
