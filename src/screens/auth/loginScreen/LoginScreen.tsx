import { Button } from "@/src/components/Button";
import { EntryHeader } from "@/src/components/EntryHeader";
import { InputText } from "@/src/components/InputText";
import Theme from "@/src/theme/Theme";
import React, { useState } from "react";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const LoginScreen: React.FC = (props: any) => {

  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const validateForm = (): boolean => {
    const newErrors = {
      email: "",
      password: ""
    };

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleLogin = () => {
    if (validateForm()) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        // Navigate to Dashboard on successful login
        props.navigation.replace("Dashboard");
      }, 1500);
    }
  };

  const handleForgotPassword = () => {
    Alert.alert(
      "Forgot Password",
      "Password reset functionality would go here."
    );
  };

  const handleSignUp = () => {
    props.navigation.replace("SignUp");
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <Image
          source={Theme.images.logo}
          style={{
            width: Theme.heights.semiMedium,
            height: Theme.heights.medium,
            alignSelf: "center",
            marginBottom: Theme.spacing.medium
          }}
        />
        <EntryHeader title="Welcome Back!" subtitle="Login to continue" />

        <View style={styles.formContainer}>
          <InputText
            title="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            error={errors.email}
            mainViewStyle={{ marginBottom: Theme.spacing.medium }}
          />

          <InputText
            title="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            error={errors.password}
          />

          <TouchableOpacity
            onPress={handleForgotPassword}
            style={styles.forgotPassword}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <Button
            title="Login"
            onPress={handleLogin}
            loading={loading}
            disabled={loading}
            viewMainStyle={{ marginTop: Theme.spacing.xlarge * 3 }}
          />

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>{"Don't have an account? "}</Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.signUpLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
