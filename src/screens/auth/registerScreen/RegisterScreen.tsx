import { Button } from "@/src/components/Button";
import { EntryHeader } from "@/src/components/EntryHeader";
import { InputText } from "@/src/components/InputText";
import Theme from "@/src/theme/Theme";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const RegisterScreen: React.FC = (props: any) => {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });

  const validateForm = (): boolean => {
    const newErrors = {
      username: "",
      email: "",
      password: "",
      passwordConfirm: ""
    };

    if (!userName) {
      newErrors.username = "user name is required";
    }
    
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

    if (!passwordConfirm) {
      newErrors.passwordConfirm = "Confirm password is required";
    } else if (passwordConfirm !== password) {
      newErrors.passwordConfirm = "Confirm password does not match";
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSignup = () => {
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

  const handleLogin = () => {
    props.navigation.replace("Login");
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
        <EntryHeader title="Join Us" subtitle="Create Your Account" />

        <View style={styles.formContainer}>
          <InputText
            title="Unsername"
            placeholder="Enter your user name"
            value={userName}
            onChangeText={setUserName}
            error={errors.username}
            mainViewStyle={{ marginBottom: Theme.spacing.medium }}
          />

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
            mainViewStyle={{ marginBottom: Theme.spacing.medium }}
          />

          <InputText
            title="Confirm Password"
            placeholder="Enter your password again"
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            secureTextEntry
            error={errors.passwordConfirm}
          />

          <Button
            title="Signup"
            onPress={handleSignup}
            loading={loading}
            disabled={loading}
            viewMainStyle={{ marginTop: Theme.spacing.xlarge * 2.5 }}
          />

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>{"Already have an account? "}</Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.signUpLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
