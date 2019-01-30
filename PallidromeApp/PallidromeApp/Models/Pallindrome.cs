using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PallidromeApp.Models
{
    [Table("Pallindrome")]
    public class Pallindrome
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long PallindromeId { get; set; }

        [Required(ErrorMessage = "Pallindrome entry is required")]
        public string PallindromeData { get; set; }
    }
}