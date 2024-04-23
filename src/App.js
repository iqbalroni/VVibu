// const { useEffect } = "react";
import { Container, Card, Row } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isload, setLoad] = useState(true);
  const [cariTerbaru, setTerbaru] = useState(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:3030/terbaru").then((response) => {
      setData(response.data.data);
      setLoad(false);
    });
  }, []);
  return (
    <div className="App">
      <Container className="mt-3 mb-4">
        <Row>
          <div className="col-sm-12">
            <div className="terbaru mb-3">
              <h3 className="title-copyright">KomikIndo - Komik Terbaru</h3>
              <p className="p-desk">
                Kamu sedang berada dihalaman khusus update chapter komik
                terbaru. Tentunya semua sudah diterjemahkan kedalam bahasa
                Indonesia. Kami juga memiliki semua judul-judul komik yang rilis
                di tahun ini dalam berbagai genre. Seperti komik berwarna, dan
                untuk manga yang terkenal yang sedang hype kami memberikan tanda
                HOT. Hanya di KomikIndo situs baca manga online terlengkap dan
                terupdate!
              </p>
            </div>
            {isload === true ? (
              <div className="terbaru load">
                <div class="loader"></div>
                <h3 className="title-terbaru">Loading..</h3>
              </div>
            ) : (
              <div className="terbaru">
                <p className="p-terbaru">Update Chapter Komik Terbaru</p>
                <h3 className="title-terbaru">Update Chapter Komik Terbaru</h3>
                <input
                  placeholder="Cari Komik Terbaru"
                  className="search-terbaru"
                  onChange={(v) => {
                    setTerbaru(v.target.value);
                  }}
                />
                {cariTerbaru.length >= 1 ? (
                  <div>
                    <p className="result-search">
                      Hasil Pencarian Dari {cariTerbaru} Page 1
                    </p>
                    <Row className="mt-3">
                      {data
                        .filter((datas) =>
                          datas.title
                            .toLowerCase()
                            .includes(cariTerbaru.toLowerCase())
                        )
                        .map((element, index) => (
                          <div key={index} className="col-sm-2">
                            <Card className="mb-2">
                              <Card.Img
                                variant="top gambar-kartun"
                                src={element.image}
                              />
                              <div className="body-kartun">
                                <div className="keterangan-kartun">
                                  <h3>{element.title}</h3>
                                </div>
                                <div className="footer-card">
                                  <span className="times">
                                    {element.update}
                                  </span>
                                  <span className="times">
                                    {element.chapter}
                                  </span>
                                </div>
                              </div>
                            </Card>
                          </div>
                        ))}
                    </Row>
                  </div>
                ) : (
                  <Row className="mt-3">
                    {data.map((element, index) => (
                      <div key={index} className="col-sm-2">
                        <Card className="mb-2">
                          <Card.Img
                            variant="top gambar-kartun"
                            src={element.image}
                          />
                          <div className="body-kartun">
                            <div className="keterangan-kartun">
                              <h3>{element.title}</h3>
                            </div>
                            <div className="footer-card">
                              <span className="times">{element.update}</span>
                              <span className="times">{element.chapter}</span>
                            </div>
                          </div>
                        </Card>
                      </div>
                    ))}
                  </Row>
                )}
              </div>
            )}
          </div>
          <div className="col-sm-3"></div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
