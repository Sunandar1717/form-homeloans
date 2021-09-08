import { Form, Input, Space, DatePicker, Layout, Typography,Menu, Row, Col, Button } from "antd";
import { InboxOutlined } from '@ant-design/icons';
import UploadFile from "./UploadFile";

const { Header, Content, Sider } = Layout;
const { Text, Title } = Typography;

function FormDataDiri() {
    return (
        
        <Layout style={{backgroundColor:"white", marginBottom:"50px"}}>
            <Sider width={200} style={{ height: "100vh" }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    style={{ height: "100%" }}
                >
                </Menu>
                
            </Sider>
    
           
            <Form layout="horizontal " style={{alignContent:"center", width:"60%", marginTop: "2%",marginLeft:"30px", marginBottom:"25px"}}>

                <Form.Item name="tite">
                    <Title level={2}>Silahkan Isi Form Data Diri</Title>
                </Form.Item>
               
                <Row>
                    <Col span={7}> <Form.Item label="Nomor Induk KTP*" name="nomorIndukKtp"></Form.Item> </Col>
                    <Col span={17} push={2}>
                        <Input type="number" placeholder="Masukan Nomor Induk KTP " />
                    </Col>
                </Row>
                <Row>
                    <Col span={7}>  <Form.Item label="Nama Lengkap*" name="namaLengkap"></Form.Item> </Col>
                    <Col span={17} push={2}>
                        <Input type="text" placeholder="Masukan Nama Lengkap" />
                    </Col>
                </Row>
                <Row>
                    <Col span={7}>  <Form.Item label="Tempat, Tanggal Lahir*" name="tempatTanggalLahir"></Form.Item> </Col>
                    <Col span={17} push={2}>
                        <Space direction="horizontal">
                            <Input type="text" placeholder="Masukan Ttl" />
                            <DatePicker layout="horizontal" style={{ marginLeft: "20%" }} />
                        </Space>

                    </Col>
                </Row>
                <Row>
                    <Col span={7}>  <Form.Item label="Alamat Saat Ini*" name="alamatSaatIni"></Form.Item> </Col>
                    <Col span={17} push={2}>
                        <Input type="text" placeholder="Masukan Alamat" />
                    </Col>
                </Row>
                <Row>
                    <Col span={7}> <Form.Item label="Pekerjaan*" name="pekerjaan"></Form.Item> </Col>
                    <Col span={17} push={2}>
                        <Input type="text" placeholder="Masukan Pekerjaan" />
                    </Col>
                </Row>
                <Row>
                    <Col span={7}> <Form.Item label="Pendapatan Perbulan*" name="pendapatanPerbulan"></Form.Item> </Col>
                    <Col span={17} push={2}>
                        <Input type="number" placeholder="Masukan Pendapatan Perbulan" />
                    </Col>
                </Row>
                
                <Row>
                    <Col span={7}>
                        <Text > Bukti Selfie KTP* <br/>
                            <a href="assets/image/cth_ktp.png">Contoh Selfie</a>
                        </Text>
                    </Col>
                    <Col span={17} push={2}>
                      <UploadFile/>
                    </Col>
                </Row>
                
                    <Row style={{ marginTop: "20PX" }}>
                    <Col span={7}>
                        <Text > Bukti Selfie KTP* <br/>
                           
                            <Text>Suami dan/Atau Istri</Text>
                        </Text>
                    </Col>
                    <Col span={17} push={2}>
                      <UploadFile/>
                    </Col>
                </Row>
            
                 <Space direction="horizontal" style={{marginTop: "40px", marginLeft: "100%"}}>
                <Button type="primary" shape="round" size={"middle"}>
                Submit Pengajuan KPR
                </Button>
                </Space>
            </Form>
          
        </Layout>
       
    );
}

export default FormDataDiri;