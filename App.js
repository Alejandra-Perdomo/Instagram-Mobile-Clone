import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

import AuthNavigation from "./AuthNavigation";

export default function App(){

  return (
      <AuthNavigation/>
  );
}

/* const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
}) */

