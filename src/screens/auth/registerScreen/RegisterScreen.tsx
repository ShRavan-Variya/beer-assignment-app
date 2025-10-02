import { isNetworkAvailable } from "@/src/api/manager";
import { Button } from "@/src/components/Button";
import { EntryHeader } from "@/src/components/EntryHeader";
import { InputText } from "@/src/components/InputText";
import { registerUser } from "@/src/services/authServices";
import Theme from "@/src/theme/Theme";
import { useToast } from "expo-toast";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const RegisterScreen: React.FC = (props: any) => {
  const toast = useToast();
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
    } else if (!/^[A-Za-z0-9]+$/.test(password)) {
      newErrors.password = "Password must contain only letters and numbers";
    }

    if (!passwordConfirm) {
      newErrors.passwordConfirm = "Confirm password is required";
    } else if (passwordConfirm !== password) {
      newErrors.passwordConfirm = "Confirm password does not match";
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const doRegisterUser = async () => {
    const isConnected = await isNetworkAvailable();
    if (!isConnected) {
      toast.show("No internet connection available!");
      return;
    }

    setLoading(true);
    try {
      const data = {
        "name": userName,
        "email": email,
        "password": password,
        "avatar": "https://picsum.photos/800"
      }
      const response: any = await registerUser(data);
      setLoading(false);
      if (response && response.data) {
        toast.show("Registration Successful. Please login to continue.");
      } else {
        const message = "Registration failed. Please try again.";
        toast.show(message);
      }
    } catch (error: any) {
      console.log("error: ", JSON.stringify(error));
      const message = "Registration failed. Please try again.";
      toast.show(message);
      setLoading(false);
    }
  }

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
            width: Theme.responsiveSize.size100,
            height: Theme.responsiveSize.size75,
            alignSelf: "center",
            marginBottom: Theme.responsiveSize.size10
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
            mainViewStyle={{ marginBottom: Theme.responsiveSize.size10 }}
          />

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
            mainViewStyle={{ marginBottom: Theme.responsiveSize.size10 }}
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
            onPress={() => {
              if (validateForm()) {
                doRegisterUser();
              }
            }}
            loading={loading}
            disabled={loading}
            variant="primary"
            viewMainStyle={{ marginTop: Theme.responsiveSize.size24 * 2.5 }}
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
