package com.cognizant.springlearn.service;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Hardcoded user for demonstration - matches the curl example (user:pwd)
        if ("user".equals(username)) {
            return new User("user", "$2a$10$7QJk0Rn0i2G/6UeM3RfjZuIYVfxxTHR2ZY2Fs3lEIJa7RvzO0K2f6",
                    // bcrypt hash of "pwd"
                    java.util.Collections.emptyList());
        }
        throw new UsernameNotFoundException("User not found: " + username);
    }
}
