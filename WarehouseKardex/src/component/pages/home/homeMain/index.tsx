import { Result, Typography } from 'antd';
import { Button, Form, Row, Col, Radio, Input, Checkbox, Tabs } from "sanhab-components-library";
import HomeMainHook from './hook'
import ResultTable from '../../../pageDetails/home/resultTable/index'
import JsonResult from '../../../pageDetails/home/jsonResult/index'
import { IDataResult } from "../../../../controler/model/home/model";
import styles from './styles.module.sass'
const { TabPane } = Tabs;
const { Title } = Typography;


const Home = (props: any) => {
    const homeMainHook = HomeMainHook(props);

    return (
        <div className={styles.print_wrapper}>
            <div className="form_wrapper">

                <Form className="form hideOnPrint"
                    form={homeMainHook.form}
                    onFinish={homeMainHook.onFinish}
                >
                    <Row>
                        <>
                            <Col span={24}>
                                <Form.Item
                                    label="کد پستی"
                                    name="postalCode"
                                    rules={[
                                        {
                                            min: 10,
                                            max: 10,
                                            message: "کدپستی باید 10 رقمی باشد.",
                                        },
                                        {
                                            required: true,
                                            message: "لطفا کد پستی را وارد کنید.",
                                        }
                                    ]}>
                                    <Input type="number" />
                                </Form.Item>
                            </Col>

                        </>




                        <Col style={{ display: 'flex', flexFlow: 'row-reverse' }} sm={24}>
                            <Button type="primary" htmlType="submit" loading={homeMainHook.isLoadingSubmitBtn}>
                                استعلام
                        </Button>
                        </Col>
                    </Row>



                </Form >

            </div >


            {homeMainHook.showTable ? (
                <Tabs className="hide_on_print" defaultActiveKey="1" >
                    <TabPane tab="نتیجه" key="1">
                        <ResultTable printPage={homeMainHook.printPage} result={homeMainHook.result} resultCount={homeMainHook.resultCount} />
                    </TabPane>
                    <TabPane tab="json" key="2">
                        <JsonResult result={homeMainHook.fullResult} />
                </TabPane>

                </Tabs>

            ) : null}




<div className="printable_table">
                {homeMainHook.result?.map((item: IDataResult) => {
                    if (item.Id !== undefined) return (
                        <>
                        <h4>{item.Name}</h4>
                        <div className="printable_column_wrapper m-b-32">

                            <div className="single_block">
                                <div className="label">نام</div>
                                <div className="content">{item.Name}</div>
                            </div>

                            <div className="single_block">
                                <div className="label">تلفن همراه</div>
                                <div className="content">{item.Mobile}</div>
                            </div>

                            <div className="single_block">
                                <div className="label">تلفن تماس</div>
                                <div className="content">{item.PhoneNumber}</div>
                            </div>

                            <div className="single_block">
                                <div className="label">کدپستی</div>
                                <div className="content">{item.PostalCode}</div>
                            </div>

                            <div className="single_block">
                                <div className="label">استان</div>
                                <div className="content">{item.Province}</div>
                            </div>

                            <div className="single_block">
                                <div className="label">ناحیه شهری</div>
                                <div className="content">{item.Township}</div>
                            </div>

                            <div className="single_block">
                                <div className="label">مساحت</div>
                                <div className="content">{item.Area}</div>
                            </div>

                            <div className="single_block">
                                <div className="label">واحد مساحت</div>
                                <div className="content">{item.AreaType}</div>
                            </div>

                            <div className="single_block">
                                <div className="label">صاحب</div>
                                <div className="content">{item.CeoName}</div>
                            </div>

                            <div className="single_block">
                                <div className="label">کد ملی</div>
                                <div className="content">{item.CeoNationalId}</div>
                            </div>

                            <div className="single_block">
                                <div className="label">شهر</div>
                                <div className="content">{item.City}</div>
                            </div>

                            <div className="single_block">
                                <div className="label">تاریخ تایید</div>
                                <div className="content">{item.ConfirmDate}</div>
                            </div>

                            <div className="single_block">
                                <div className="label">کد ملی تایید کننده</div>
                                <div className="content">{item.ConfirmUserNationalId}</div>
                            </div>

                            <div className="single_block">
                                <div className="label">تاریخ انقضای قرارداد</div>
                                <div className="content">{item.ContractorExpireDate}</div>
                            </div>

                            <div className="single_block">
                                <div className="label">نام سازنده قرارداد</div>
                                <div className="content">{item.ContractorName}</div>
                            </div>

                            <div className="single_block">
                                <div className="label">کد ملی سازنده قرارداد</div>
                                <div className="content">{item.ContractorNationalId}</div>
                            </div>

                            <div className="single_block">
                                <div className="label">شماره دولتی انبار</div>
                                <div className="content">{item.GovWarehouseNo}</div>
                            </div>

                            {/* <div className="single_block">
                                    <div className="label">تایید کننده</div>
                                    <div className="content">{item.GovWarehouseNo}</div>
                                </div> */}

                            <div className="single_block">
                                <div className="label">تاریخ اصلاح</div>
                                <div className="content">{item.ModifyDate}</div>
                            </div>

                            <div className="single_block">
                                <div className="label">دلیل حذف</div>
                                <div className="content">{item.DeleteReason}</div>
                            </div>

                            <div className="single_block">
                                <div className="label">توضیحات حذف</div>
                                <div className="content">{item.DeleteDescription}</div>
                            </div>

                            <div className="single_block">
                                <div className="label">کد ملی حذف کننده</div>
                                <div className="content">{item.DeleterNationalId}</div>
                            </div>


                        </div>
                    </>)
                })}
            </div>
            

        </div>
    )
}
export default Home;