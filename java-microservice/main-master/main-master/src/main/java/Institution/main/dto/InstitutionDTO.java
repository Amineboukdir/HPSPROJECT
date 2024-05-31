package Institution.main.dto;

import Institution.main.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class InstitutionDTO {
    private String institution_id;
    private String creation_user;
    private String creation_date; // If you store dates as strings,
    private String last_modif_user;
    private String last_modif_date; // If you store dates as strings,
    private String institution_name;
    private Status status;
    private Integer max_nbr_of_users;
    private Integer max_nbr_of_protocols;
    private Integer max_nbr_of_channels;
    private Integer max_tps;
}
