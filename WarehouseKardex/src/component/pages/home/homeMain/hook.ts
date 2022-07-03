import { useState } from "react";
import { Form } from 'antd';
import api from '../../../../controler/services/home/apiRequest'
import { Notification } from 'sanhab-components-library'
import { IWarehouseInqueryByPostalCode, IDataResult } from '../../../../controler/model/home/model'

function HomeMainHook(props: any) {

    const [form] = Form.useForm();
    const [isLoadingSubmitBtn, setIsLoadingSubmitBtn] = useState(false);
    const [isArchive, setIsArchive] = useState(false);
    const [currentSearchType, setCurrentSearchType] = useState("");
    const [showTable, setShowTable] = useState<boolean>(false);
    const [result, setResult] = useState<IDataResult[]>([]);
    const [resultCount, setResultCount] = useState<number>(0);
    const [fullResult, setFullResult] = useState<any>({});

    const onFinish = (values: IWarehouseInqueryByPostalCode) => {
        setIsLoadingSubmitBtn(true);

        let data: IWarehouseInqueryByPostalCode = {
            postalCode: values.postalCode,
            size: 0,
            start: 0
        }

        let apiMethod = setApiMethod();

        if (apiMethod !== undefined) {
            apiMethod(data).then((response: any) => {
                if (response?.data?.IsSucceed) { setResult(response?.data?.Result?.Warehouses); setResultCount(response?.data?.Result?.Count); setFullResult(response?.data?.Result); setShowTable(true) }
                else Notification.danger({ message: response?.data?.Error.Message })
            })
                .finally(() => { setIsLoadingSubmitBtn(false) })
        }
    }

    const setApiMethod = () => {
        return api.WarehouseInqueryByPostalCode

    }

    const onChangeRadio = (e: any) => {
        setCurrentSearchType(e.target.value)
    }

    const onChangeIsArchive = (e: any) => {
        setIsArchive(e.target.checked)
    }

    const printPage = () => {
        window.print()
    }

    return {
        form,
        isLoadingSubmitBtn,
        currentSearchType,
        result,
        showTable,
        fullResult,
        resultCount,
        onFinish,
        onChangeRadio,
        onChangeIsArchive,
        printPage
    }
}

export default HomeMainHook;