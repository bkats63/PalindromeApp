using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace PallidromeApp.Models
{
    public class PallindromeContextFactory : IDesignTimeDbContextFactory<PallindromeContext>
    {
        public PallindromeContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                           .SetBasePath(Directory.GetCurrentDirectory())
                           .AddJsonFile("appsettings.json")
                           .Build();
            var optionsBuilder = new DbContextOptionsBuilder<PallindromeContext>();
            optionsBuilder.UseSqlServer(configuration.GetConnectionString("PallindromeContext"));

            return new PallindromeContext(optionsBuilder.Options);
        }
    }
}
