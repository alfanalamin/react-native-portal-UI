// Home.js
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Button from "./components/button";
const Home = () => {
  return (
    // tampilan pertama
    <View style={styles.container}>
      {/* <Button navigation={navigation} /> Display the Navbar */}
      <View style={styles.box}>
        {/* Konten di dalam kotak */}
        <Text style={styles.boxText}>Camtion IT</Text>
        <Text style={styles.boxText1}>Application</Text>
        <View style={styles.infoContainer}>
          {/* Gambar pertama */}
          <Text style={styles.boxText2}>Informasi Kampus Seputar IT</Text>
          <Image
            source={require("./assets/it.png")}
            style={styles.gambarKecil}
          />
        </View>
        <View style={styles.infoContainer2}>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box3}></View>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Jurusan IT</Text>
        <View style={styles.newsContainer}>
          {/* Artikel berita pertama */}
          <View style={styles.newsItem}>
            <Image
              source={require("./assets/sistem-informasi.png")}
              style={styles.newsImage}
            />
            <Text style={styles.newsTitle}>Sistem Informasi</Text>
          </View>
          {/* Artikel berita kedua */}
          <View style={styles.newsItem}>
            <Image
              source={require("./assets/teknik-informatika.png")}
              style={styles.newsImage}
            />
            <Text style={styles.newsTitle}>Teknik Informatika</Text>
          </View>
        </View>
        <View style={styles.newsContainer}>
          {/* Artikel berita pertama */}
          <View style={styles.newsItem}>
            <Image
              source={require("./assets/rekayasa-perangkat-lunak.png")}
              style={styles.newsImage}
            />
            <Text style={styles.newsTitle}>Rekayasa Perangkat Lunak</Text>
          </View>
          {/* Artikel berita kedua */}
          <View style={styles.newsItem}>
            <Image
              source={require("./assets/teknologi-informasi.png")}
              style={styles.newsImage}
            />
            <Text style={styles.newsTitle}>Teknologi Informasi</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    alignSelf: "flex-start", // Align the text to the left
  },
  newsContainer: {
    flexDirection: "row",
  },
  newsItem: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  newsImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "top",
    alignItems: "center",
    flexDirection: "column",
    padding: 16,
  },
  box: {
    width: 350,
    height: 200,
    paddingHorizontal: 20,
    backgroundColor: "#005F82", // Warna latar belakang kotak
    borderRadius: 20, // Sudut melengkung pada kotak
    marginTop: 20, // Jarak ke bawah
  },
  box2: {
    width: 30,
    height: 10,
    backgroundColor: "#ffffff",
    marginLeft: 20,
    borderRadius: 10,
  },
  box3: {
    width: 15,
    height: 10,
    backgroundColor: "#ffffff",
    marginLeft: 5,
    borderRadius: 20,
  },
  boxText: {
    color: "#ffffff", // Warna teks di dalam kotak
    marginTop: 10, // Jarak ke bawah
    fontSize: 20,
    marginLeft: 10, // Jarak antara teks dan gambar
  },

  boxText1: {
    color: "#95AFF4", // Warna teks di dalam kotak
    marginLeft: 10, // Jarak antara teks dan gambar
  },
  infoContainer: {
    flexDirection: "row", // Mengatur tata letak ke arah row (horizontal)
    alignItems: "center", // Memposisikan elemen secara vertikal di tengah
    padding: 9,
  },
  infoContainer2: {
    flexDirection: "row", // Mengatur tata letak ke arah row (horizontal)
    alignItems: "center", // Memposisikan elemen secara vertikal di tengah
    padding: 6.5,
    marginBottom: 20,
  },
  boxText2: {
    color: "#ffffff", // Warna teks di dalam kotak
    marginLeft: 10, // Jarak antara teks dan gambar
    marginBottom: 20,
    fontSize: 24,
  },
  gambarKecil: {
    width: 100, // Sesuaikan ukuran gambar sesuai kebutuhan
    height: 100, // Sesuaikan ukuran gambar sesuai kebutuhan
  },
});

export default Home;
