using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PallidromeApp.Models
{
    public class PallindromeContext
        : DbContext
    {
        public PallindromeContext(DbContextOptions options)
            : base(options)
        {
        }

        public DbSet<Pallindrome> Pallindromes { get; set; }
    }
}

