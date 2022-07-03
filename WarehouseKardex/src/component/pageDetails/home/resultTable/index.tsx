
import { IDataResult } from "../../../../controler/model/home/model";
import { Collapse, Alert } from 'antd'
import { Button, Icon } from 'sanhab-components-library'
const { Panel } = Collapse;
interface IProps {
    result: IDataResult
    resultCount: number
    // printPage : () => void
}
const ResultTable = (props: any) => {

    return (
        <>
            <Alert message={`تعداد انبارهای مرتبط با این کد پستی ${props.resultCount} میباشد.`}
                type="info"
                className="m-b-16"
                style={{ "display": 'inline-block', 'width': 'fit-content', 'fontSize': '11px' }} />

            <Button onClick={props.printPage} className="p-x-8 print_btn" style={{ float: "left" }}><Icon iconType="print" ></Icon></Button>

            <Collapse accordion>
                {props.result?.map((item: IDataResult) => {
                    if (item.Id !== undefined) return (
                        <Panel header={item.Name} key={item.Id}>
                            <div className="printable_column_wrapper">

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

                                {/* <div className="single_block">
                                    <div className="label">شهرستان</div>
                                    <div className="content">{item.Township}</div>
                                </div>

                                <div className="single_block">
                                    <div className="label">نوع محل</div>
                                    <div className="content">{item.AreaType}</div>
                                </div>

                                <div className="single_block">
                                    <div className="label">نام محلی</div>
                                    <div className="content">{item.BreakUpDate}</div>
                                </div>

                                <div className="single_block">
                                    <div className="label">کد محلی</div>
                                    <div className="content">{item.BreakUpDate}</div>
                                </div>

                                <div className="single_block">
                                    <div className="label">زیر محل</div>
                                    <div className="content">{item.BreakUpDate}</div>
                                </div>

                                <div className="single_block">
                                    <div className="label">خیابان</div>
                                    <div className="content">{item.BreakUpDate}</div>
                                </div>

                                <div className="single_block">
                                    <div className="label">خیابان2</div>
                                    <div className="content">{item.BreakUpDate}</div>
                                </div>

                                <div className="single_block">
                                    <div className="label">شماره ساختمان</div>
                                    <div className="content">{item.BreakUpDate}</div>
                                </div>

                                <div className="single_block">
                                    <div className="label">طبقه</div>
                                    <div className="content">{item.BreakUpDate}</div>
                                </div>

                                <div className="single_block">
                                    <div className="label">واحد</div>
                                    <div className="content">{item.BreakUpDate}</div>
                                </div>

                                <div className="single_block">
                                    <div className="label">نام ساختمان</div>
                                    <div className="content">{item.BreakUpDate}</div>
                                </div>

                                <div className="single_block">
                                    <div className="label">توضیحات</div>
                                    <div className="content">{item.BreakUpDate}</div>
                                </div>

                                <div className="single_block">
                                    <div className="label">	کد پیگیری</div>
                                    <div className="content">{item.BreakUpDate}</div>
                                </div>

                                <div className="single_block">
                                    <div className="label">	پیغام خطا</div>
                                    <div className="content">{item.BreakUpDate}</div>
                                </div> */}

                            </div>
                        </Panel>
                    )
                })}


            </Collapse>





            

        </>
    );
}

export default ResultTable;