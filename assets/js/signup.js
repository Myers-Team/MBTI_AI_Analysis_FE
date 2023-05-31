@RestController
@RequestMapping("/user")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody SignUpRequest signUpRequest) {
        // 이메일 중복 체크
        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity.badRequest().body("이미 사용 중인 이메일입니다.");
        }

        // 새로운 사용자 생성
        User newUser = User.builder()
                .email(signUpRequest.getEmail())
                .password(signUpRequest.getPassword())
                .nickname(signUpRequest.getNickname())
                .build();

        // 사용자 저장
        User savedUser = userRepository.save(newUser);

        // 회원가입 성공 응답
        SignUpResponse signUpResponse = new SignUpResponse(savedUser.getId(), savedUser.getEmail(), savedUser.getNickname());
        return ResponseEntity.ok(signUpResponse);
    }
}
