# 🍺 Beer Assignment App

This is a **React Native Expo** project developed as an assignment app.  
It demonstrates **authentication, beer listing with pagination, and beer details**.  
The app is built with **TypeScript**, reusable components, and uses external APIs for data handling.

---

## 📌 Project Details

- **Framework:** [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
- **Language:** TypeScript
- **Navigation:** [React Navigation](https://reactnavigation.org/) + Expo Router
- **Networking:** [Axios](https://axios-http.com/)
- **UI & Theming:** Custom `Theme` file, `SafeAreaView`, responsive font sizes (`react-native-responsive-fontsize`)
- **Toast Notifications:** [expo-toast](https://docs.expo.dev/versions/latest/sdk/toast/) (Expo-compatible)
- **API Handling:** Service layer using Axios
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Icons:** [@expo/vector-icons](https://docs.expo.dev/guides/icons/)

---

## 🎨 Figma Link
👉 [View Figma Design](https://www.figma.com/design/zEMHmicXPCePjDwdDdDqIx/React-Native---Assignment?node-id=0-1&t=ihP2M5RXlKGyp7pD-1)

---

## 🔗 APIs Used

We used two external APIs:

### 1. **Platzi Fake Store API (Auth)**
- **Login API** → `POST https://api.escuelajs.co/api/v1/auth/login`
- **Register API** → `POST https://api.escuelajs.co/api/v1/users`

### 2. **Punk API (Beer Data)**
- **Beer List with Pagination** → `GET https://punkapi.online/v3/beers?page=${pageNumber}`
- **Beer Details** → `GET https://punkapi.online/v3/beers/${productId}`

---

## 🚀 Features

- ✅ **User Authentication** (Login & Registration using Platzi Fake Store API)  
- ✅ **Beer Listing** with infinite scroll pagination  
- ✅ **Beer Details** with product info  
- ✅ **Reusable Components** (Button, Loader, BeerCard, CommonHeader)  
- ✅ **Custom Toast Notifications** for error/success messages  
- ✅ **Responsive UI** across devices  
- ✅ **API Integration** with Axios  

---

## 🛠️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/ShRavan-Variya/beer-assignment-app.git
   cd beer-assignment-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Expo project:
   ```bash
   npx expo start
   ```

4. Open the project in Expo Go app (iOS/Android) by scanning the QR code.

---

## 🎯 Design Assumptions

- **Clean & Minimal UI:** Kept layout simple and easy to navigate.
- **Reusable Components:** Created common components for consistency (Button, Loader, BeerCard).
- **Toast Handling:** Used expo-toast for showing feedback to users.
- **Network Handling:** Used @react-native-community/netinfo to detect internet connectivity.
- **Pagination:** Implemented lazy loading for beer list using FlatList.

---

## 👨‍💻 Developer

- **Name:** Shravan Variya
- **Role:** React Native Developer

---

## 📜 License

This project is for demo/assignment purposes only. APIs are publicly available and used for learning.