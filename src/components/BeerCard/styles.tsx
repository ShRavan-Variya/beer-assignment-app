import Theme from "@/src/theme/Theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flexDirection:'row',
    padding:15,
    backgroundColor:'#fff',
    borderColor: Theme.colors.borderColor3,
    borderWidth:2,
    borderRadius:12,
    marginVertical:8,
    alignItems:'center',
  },
  image: {
    width:120,
    height:120,
    marginRight:14,
  },
  right: {
    flex:1
  },
  title: {
    fontSize: Theme.responsiveSize.size14,
    fontWeight:'700'
  },
  sub: {
    color: Theme.colors.textColor4,
    fontSize: Theme.responsiveSize.size11,
    marginTop: Theme.responsiveSize.size2,
  },
  view: {
    marginTop: Theme.responsiveSize.size10,
    fontSize: Theme.responsiveSize.size11,
    color: Theme.colors.textColor3,
    fontWeight:'600'
  }
});

export default styles;
