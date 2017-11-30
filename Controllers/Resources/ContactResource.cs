namespace vega.Controllers.Resources
{
    using System.ComponentModel.DataAnnotations;
    
    public class ContactResource
    {
        [Required]
        [StringLength(255)]
        public string Name { get; set; }

        [Required]
        [StringLength(255)]
        public string Phone { get; set; }

        [StringLength(255)]
        public string Email { get; set; }
    }
}