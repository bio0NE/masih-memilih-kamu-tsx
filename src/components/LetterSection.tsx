import SectionLabel from "./SectionLabel";
export default function LetterSection() {
  return <section className="letter paper-section" id="surat" aria-labelledby="letter-title">
    <div className="letter-top"><span>Surat yang belum tentu mudah diucapkan</span><span>Untuk kamu ♡</span></div>
    <article className="letter-sheet"><SectionLabel>04 / Sebuah surat</SectionLabel><h2 id="letter-title" className="reveal">Untuk kamu,<br/><em>yang ingin kuajak sampai akhir.</em></h2>
      <div className="letter-body">
        <p className="salutation reveal">Sayang,</p>
        <p className="reveal">Aku tahu kita sedang lelah. Mungkin ada bagian dari dirimu yang mulai ragu, dan mungkin ada bagian dari diriku yang juga tidak tahu harus mulai memperbaiki dari mana. Aku tidak akan bilang bahwa cinta saja pasti cukup, karena hubungan yang serius butuh lebih dari sekadar perasaan.</p>
        <p className="reveal">Butuh kejujuran. Butuh rasa hormat. Butuh kemauan untuk mendengarkan, bahkan saat yang kita dengar tidak menyenangkan. Butuh dua orang yang sama-sama mau datang kembali setelah bertengkar—bukan satu orang yang terus mengejar sementara yang lain memilih menjauh.</p>
        <p className="reveal">Aku tidak menulis ini untuk membuatmu merasa bersalah atau memaksamu bertahan. Aku menulis karena aku ingin kita bisa menjadi lebih baik bersama.</p>
        <p className="reveal">Aku ingin belajar memahami lukamu tanpa mengabaikan lukaku sendiri. Aku ingin kita bisa bicara tanpa saling merendahkan, meminta maaf tanpa mencari pembenaran, dan memperbaiki hal-hal kecil sebelum berubah menjadi jarak yang besar.</p>
        <p className="reveal">Aku masih ingin membangun masa depan bersamamu. Tapi aku ingin kita membangunnya dengan sadar—bukan karena takut kehilangan waktu yang sudah lewat, bukan karena tekanan siapa pun, melainkan karena kita sama-sama memilihnya.</p>
        <p className="reveal">Kalau kamu masih punya keinginan yang sama, mari kita mulai dari satu percakapan yang jujur. Tidak harus langsung punya semua jawaban. Cukup mau duduk bersama, mendengarkan sampai selesai, dan menentukan perubahan nyata yang bisa kita lakukan berdua.</p>
        <p className="reveal">Aku tidak menjanjikan akan selalu sempurna. Aku hanya ingin hadir dengan usaha yang nyata, dan aku berharap kita bisa saling memberi hal yang sama.</p>
        <p className="reveal">Terima kasih untuk waktu, kenangan, dan bagian hidup yang sudah kita bagi sejak hari itu. Apa pun yang sedang kita rasakan sekarang, aku ingin memperlakukan hubungan ini dengan kesungguhan yang pantas untuk masa depan yang pernah kita impikan.</p>
        <div className="signature reveal"><p>Dengan hati yang masih ingin berusaha,</p><p>aku.</p></div>
      </div>
    </article><span className="letter-watermark" aria-hidden="true">♡</span>
  </section>;
}
