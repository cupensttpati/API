const validateInput = (nama, nomorTelepon) => {
    if (!nama || !nomorTelepon) {
      return 'Nama dan nomor telepon tidak boleh kosong';
    }
    return null;
  };