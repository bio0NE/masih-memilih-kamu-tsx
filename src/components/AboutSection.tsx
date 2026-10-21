import SectionLabel from "./SectionLabel";
export default function AboutSection() {
  return <section className="about paper-section" id="tentang" aria-labelledby="about-title">
    <SectionLabel>01 / Tentang kita</SectionLabel>
    <div className="about-layout">
      <div className="about-heading reveal"><span className="outline-heart" aria-hidden="true">♡</span><h2 id="about-title">Cinta bukan berarti tak pernah terluka.</h2></div>
      <div className="about-copy">
        <p className="reveal">Aku tahu akhir-akhir ini kita rasanya berbeda. Ada hal-hal yang dulu terasa dekat, sekarang terasa jauh. Ada kata-kata dan sikap yang mungkin masih tertinggal sebagai luka, bahkan setelah percakapannya selesai.</p>
        <p className="reveal">Aku tidak mau berpura-pura semuanya baik-baik saja. Kita sudah sampai sejauh ini, dan sudah membicarakan masa depan yang lebih serius. Justru karena itu, aku ingin kita berani melihat apa yang sedang terjadi—bukan saling menyalahkan, bukan juga terus diam sampai akhirnya benar-benar asing.</p>
        <p className="reveal">Kita sudah saling berbicara dari hati ke hati, dan sudah saling mengetahui apa alasan kita berbeda. Aku tidak akan memaksa kamu untuk menjadi seperti dulu, dengan tulisan-tulisan ini aku hanya mengungkapkan bukan memaksakan.</p>
      </div>
    </div>
    <span className="paper-footnote" aria-hidden="true">Kita, dalam prosesnya.</span>
  </section>;
}
