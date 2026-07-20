package com.cognizant.springlearn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.service.CustomUserDetailsService;
import com.cognizant.springlearn.util.JwtUtil;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public AuthenticationResponse authenticate() {
        LOGGER.debug("Start");

        // Username/password are already validated by Spring Security's
        // Basic Auth filter before this method is reached (see SecurityConfig)
        org.springframework.security.core.Authentication auth =
                org.springframework.security.core.context.SecurityContextHolder
                        .getContext().getAuthentication();

        final UserDetails userDetails = userDetailsService.loadUserByUsername(auth.getName());
        final String token = jwtUtil.generateToken(userDetails);

        LOGGER.debug("Token generated for user={}", auth.getName());
        LOGGER.debug("End");

        return new AuthenticationResponse(token);
    }

    // Simple response wrapper class to produce {"token": "..."} JSON
    public static class AuthenticationResponse {
        private String token;

        public AuthenticationResponse(String token) {
            this.token = token;
        }

        public String getToken() {
            return token;
        }
    }
}
