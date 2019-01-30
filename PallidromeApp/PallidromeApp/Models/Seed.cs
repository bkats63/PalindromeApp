using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PallidromeApp.Models
{
    public class Seed
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new PallindromeContext(
                serviceProvider.GetRequiredService<DbContextOptions<PallindromeContext>>()))
            {
                // Look for any movies.
                if (context.Pallindromes.Any())
                {
                    return;   // DB has been seeded
                }

                context.Pallindromes.AddRange(
                    new Pallindrome
                    {
                       
                        PallindromeData = "Was it a cat I saw?"
                    },
                    new Pallindrome
                    {
                        
                        PallindromeData = "Don't nod."
                    },
                     new Pallindrome
                     {
                         
                         PallindromeData = "Radar"
                     },
                      new Pallindrome
                      {
                         
                          PallindromeData = "No lemon, no melon"
                      }

                );
                context.SaveChanges();
            }
        }


    }
}
