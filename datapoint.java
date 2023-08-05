@Entity
@Table(name = "data_points")
public class DataPoint {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int intensity;
    private int likelihood;
    private int relevance;
    private int year;
    private String country;
    private String topics;
    private String region;
    private String city;
}
