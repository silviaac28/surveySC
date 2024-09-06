package com.surveysc.surveysc.security.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    String username;
    String password;
    private boolean enabled;
    


}
