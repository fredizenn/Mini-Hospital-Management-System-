import "./widgetLg.css"

export default function WidgetLg() {
    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    };
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <thead>
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                </thead>
                <tbody>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">Hubert Boafo</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus Approved"><Button type="Approved"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">Hubert Boafo</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus Declined"><Button type="Declined"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">Hubert Boafo</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus Approved"><Button type="Approved"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">Hubert Boafo</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgDate">$122.00</td>
                    <td className="widgetLgStatus "><Button type="Pending"/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}