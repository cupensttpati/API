// import React from "react";
// import { StyleSheet } from "react-native";
// import { View } from "react-native-reanimated/lib/typescript/Animated";

// const LocalAPI = () => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.textTitle}>Local API (JSON Server)</Text>
//             <Text>Masukan Anggota Kabayan Coding</Text>
//             <TextInput placeholder="Nama Lengkap" style={styles.input}/>
//             <TextInput placeholder="Email" style={styles.input}/>
//             <TextInput placeholder="Bidang" style={styles.input}/>
//             <Button title="Simpan" />
//             <View style={styles.line} />

//         </View>
//     )
// }

// export default LocalAPI

// const styles = StyleSheet.create({
//     container: {padding: 20},
//     textTitle: {textAlign: "center", marginBottom: 20},
//     line: {height: 2, backgroundColor: "black", marginVertical: 20},
//     input: {borderWidth: 1, marginBottom: 12, borderRadius: 25, paddingHorizontal: 18}
// })

// 

import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Image } from "react-native";
import Axios from 'axios'

const Item = () => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{
          uri: "https://api.dicebear.com/9.x/adventurer/svg?seed=Brian",
        }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <View style={styles.desc}>
        <Text style={styles.descName}>Nama Lengkap</Text>
        <Text style={styles.descEmail}>Email</Text>
        <Text style={styles.descBidang}>Bidang</Text>
      </View>
      <Text style={styles.delete}>X</Text>
    </View>
  );
};

const LocalAPI = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bidang, setBidang] = useState("");

  useEffect(()  => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };
    Axios.post("http://127.0.0.1:3006/users", data)
    .then((res) => {
      console.log("Data berhasil dikirim:", res.data);
      setName("");
      setEmail("");
      setBidang("");
    })
    .catch((err) => {
      console.error("Gagal mengirim data:", err.message);
    });
  };

  const getData = () =>{
    Axios.get('http://127.0.0.1:3006/users')
    .then(res => {
      console.log('res get data: ', res)
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local API (JSON Server)</Text>
      <Text>Masukan Anggota Kabayan Coding</Text>
      <TextInput
        placeholder="Nama Lengkap"
        style={styles.input}
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        placeholder="Bidang"
        style={styles.input}
        value={bidang}
        onChangeText={(value) => setBidang(value)}
      />
      <Button title="Simpan" onPress={submit} />
      <View style={styles.line} />
      <Item />
      <Item />
      <Item />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  textTitle: { textAlign: "center", marginBottom: 20 },
  line: { height: 2, backgroundColor: "black", marginVertical: 20 },
  input: { borderWidth: 1, marginBottom: 12, borderRadius: 25, paddingHorizontal: 18 },
  itemContainer: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  desc: { marginLeft: 18, flex: 1 },
  descName: { fontSize: 20, fontWeight: "bold" },
  descEmail: { fontSize: 16 },
  descBidang: { fontSize: 12, marginTop: 8 },
  delete: { fontSize: 20, fontWeight: "bold", color: "red" },
});

export default LocalAPI;


