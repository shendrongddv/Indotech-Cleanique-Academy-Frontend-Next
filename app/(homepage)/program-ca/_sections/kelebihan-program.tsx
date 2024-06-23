import Image from "next/image";

const KelebihanProgram = () => {
  return (
    <div className="grid gap-10 md:grid-cols-3">
      {/* COL */}
      <div className="border md:row-span-2">
        <figure className="w-full h-auto flex justify-center items-center border-b overflow-hidden rounded-md">
          <Image
            src="/img10.jpg"
            alt="Image"
            width={1604}
            height={1093}
            className="w-full h-auto"
          />
        </figure>
        <div className="p-4 text-start">
          <p>
            Sudah memiliki izin edar KEMENKES (Produk kami telah mengantongi
            izin edar dari KEMENKES, hal ini tentunya akan meningkatkan rasa
            aman bagi Mitra dalam menjual / mendistribusikan produk-produk yang
            ada dalam paket bisnis Cleanique Academy ini. Tentu saja, mitra
            tidak dapat menggunakan izin edar ini secara sembarangan, karena
            izin edar melekat pada produk. sehingga Mitra hanya berhak
            menggunakan izin edar ini jika Mitra mengikuti prosedur/ketentuan
            yang ditetapkan oleh PT Indotech Berkah Abadi terkait standarisasi
            produk untuk memastikan kualitas dan proses pembuatan sabun terjaga
            dan dilakukan secara benar)
          </p>
        </div>
      </div>

      {/* COL */}
      <div className="border">
        <figure className="w-full h-auto flex justify-center items-center border-b overflow-hidden rounded-md">
          <Image
            src="/img11.jpg"
            alt="Image"
            width={1604}
            height={1093}
            className="w-full h-auto"
          />
        </figure>
        <div className="p-4 text-start">
          <p>
            Merk sudah terdaftar DJKI (Ketika Mitra bergabung dengan Cleanique
            Academy, Mitra akan diizinkan untuk menggunakan merek tersebut dan
            dilindungi oleh undang-undang untuk menghindari kemungkinan gugatan
            merek yang dapat mengganggu bisnis mitra)
          </p>
        </div>
      </div>

      {/* COL */}
      <div className="border">
        <figure className="w-full h-auto flex justify-center items-center border-b overflow-hidden rounded-md">
          <Image
            src="/img12.jpg"
            alt="Image"
            width={1604}
            height={1093}
            className="w-full h-auto"
          />
        </figure>
        <div className="p-4 text-start">
          <p>
            Sudah memiliki sertifikat halal MUI (Produk PT Indotech Berkah Abadi
            telah bersertifikat HALAL MUI, sehingga aman untuk digunakan, karena
            tidak mengandung bahan najis yang akan merusak kemurnian/nilai
            ibadah konsumun, terutama bagi konsumen yang muslim)
          </p>
        </div>
      </div>

      {/* COL */}
      <div className="border">
        <div className="p-4 text-start space-y-4">
          <span className="text-lg font-bold">Proteksi Perang Harga</span>
          <p>
            Kami memiliki pengalaman yang cukup untuk memastikan harga jual
            produk tetap stabil dan tidak berubah-ubah antara mitra; sistem ini
            juga telah disesuaikan dengan program kemitraan Cleanique Academy,
            sehingga penjualan produk dapat terjaga
          </p>
        </div>
      </div>

      {/* COL */}
      <div className="border">
        <div className="p-4 text-start space-y-4">
          <span className="text-lg font-bold"> Garansi Uang Kembali</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            nihil, sapiente exercitationem iure praesentium iusto minus vel
            voluptatibus eum. Rerum aliquam corrupti enim ut ex aperiam
            repellendus necessitatibus exercitationem eius, aut tempore!
          </p>
        </div>
      </div>
    </div>
  );
};

export default KelebihanProgram;
