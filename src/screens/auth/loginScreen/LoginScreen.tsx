import { isNetworkAvailable } from "@/src/api/manager";
import { Button } from "@/src/components/Button";
import { EntryHeader } from "@/src/components/EntryHeader";
import { InputText } from "@/src/components/InputText";
import { loginUser } from "@/src/services/authServices";
import Theme from "@/src/theme/Theme";
import { useToast } from "expo-toast";
import React, { useState } from "react";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const LoginScreen: React.FC = (props: any) => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    } else if (!/^[A-Za-z0-9]+$/.test(password)) {
      newErrors.password = "Password must contain only letters and numbers";
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };
  
  const doLoginUser = async () => {
    const isConnected = await isNetworkAvailable();
    if (!isConnected) {
      toast.show("No internet connection available!");
      return;
    }

    setLoading(true);
    try {
      const data = {
        "email": email,
        "password": password,
      }
      const response: any = await loginUser(data);
      setLoading(false);
      console.log('response :: ', JSON.stringify(response));
      
      if (response && response.data) {
        toast.show("Login Successful.");
        props.navigation.replace("Dashboard");
      } else {
        const message = "Login failed. Please try again.";
        toast.show(message);
      }
    } catch (error: any) {
      console.log("error: ", JSON.stringify(error));
      const message = "Login failed. Please try again.";
      toast.show(message);
      setLoading(false);
    }
  }

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
            width: Theme.responsiveSize.size100,
            height: Theme.responsiveSize.size75,
            alignSelf: "center",
            marginBottom: Theme.responsiveSize.size10
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
            mainViewStyle={{ marginBottom: Theme.responsiveSize.size10 }}
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
            onPress={() => {
              if (validateForm()) {
                doLoginUser();
              }
            }}
            loading={loading}
            disabled={loading}
            variant="primary"
            viewMainStyle={{ marginTop: Theme.responsiveSize.size24 * 3 }}
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
