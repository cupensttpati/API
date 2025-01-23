import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const FormTambahKontak = () => {
  const [nama, setNama] = useState('');
  const [nomorTelepon, setNomorTelepon] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const validationError = validateInput(nama, nomorTelepon);
    if (validationError) {
      setError(validationError);
    } else {
      Alert.alert('Sukses', 'Kontak berhasil ditambahkan');
      setNama('');
      setNomorTelepon('');
      setError('');
    }
  };

  const validateInput = (nama, nomorTelepon) => {
    if (!nama || !nomorTelepon) {
      return 'Nama dan nomor telepon tidak boleh kosong';
    }
    return null;
  };

  return (
    <View>
      <TextInput
        placeholder="Nama"
        value={nama}
        onChangeText={text => setNama(text)}
      />
      <TextInput
        placeholder="Nomor Telepon"
        value={nomorTelepon}
        onChangeText={text => setNomorTelepon(text)}
        keyboardType="phone-pad"
      />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
      <Button title="Simpan" onPress={handleSubmit} />
    </View>
  );
};

export default FormTambahKontak;