package Institution.main.InstitutionController;

import Institution.main.dto.InstitutionDTO;
import Institution.main.model.Institution;
import Institution.main.service.InstitutionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/institutions") // Added this annotation
public class InstitutionController {
    private InstitutionService institutionService;

    public InstitutionController(InstitutionService institutionService) {
        this.institutionService = institutionService;
    }


    @GetMapping("/test")
    public ResponseEntity<String> testEndpoint() {
        return ResponseEntity.ok("Test endpoint is working");
    }

    @PostMapping("/create")
    public ResponseEntity<InstitutionDTO> createInstitution(@RequestBody Institution institution) {
        InstitutionDTO createdInstitution = institutionService.createInstitution(institution);
        return new ResponseEntity<>(createdInstitution, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<InstitutionDTO> readInstitution(@PathVariable Long id) {
        InstitutionDTO institution = institutionService.readInstitution(id);
        return ResponseEntity.ok(institution);
    }

    @PutMapping("/{id}")
    public ResponseEntity<InstitutionDTO> updateInstitution(@PathVariable Long id, @RequestBody Institution institution) {
        InstitutionDTO updatedInstitution = institutionService.updateInstitution(id, institution);
        return ResponseEntity.ok(updatedInstitution);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInstitution(@PathVariable Long id) {
        institutionService.deleteInstitution(id);
        return ResponseEntity.noContent().build();
    }
}
