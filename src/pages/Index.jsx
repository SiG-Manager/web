import { Link } from "react-router-dom"

function Index() {
    return (
        <div className="">
            <div className="d-flex flex-column gap-1">
                <Link className="btn btn-outline-primary" to="/shifts/open">Открыть смену</Link>
                <Link className="btn btn-outline-primary">Закрыть смену</Link>
            </div>
            <div className="border border-danger p-2 mt-2">
                <h4 className="text-danger">Напоминание</h4>

                <div className="ms-1 mt-2">
                    <h5>Прокат электромобилей:</h5>
                    <div className="ms-1 d-flex flex-column">
                        <div><i className="bi-dot"></i>Перед открытием смены убедитесь, что все аккумуляторы заряжены</div>
                        <div>
                            <i className="bi-dot"></i>
                            Возьмите необходимое количество аккумуляторов
                            <span className="text-muted"> (кол-во машинок +3 в будние, +5 в выходные)</span>
                        </div>
                        <div><i className="bi-dot"></i>При открытии и закрытии смены проверьте рабочее состояние всех машинок</div>
                    </div>
                </div>

                <div className="ms-1 mt-3">
                    <h5>Сладкая вата, попкорн, батут:</h5>
                    <div className="ms-1 d-flex flex-column">
                        <div><i className="bi-dot"></i>Перед открытием смены проверьте наличие бензина</div>
                        <div>
                            <i className="bi-dot"></i>
                            Возьмите необходимое количество сахара
                            <span className="text-muted"> (1 кг в будние, 2 кг в выходные)</span>
                        </div>
                        <div><i className="bi-dot"></i>Проверьте рабочее состояние аппаратов и генератора</div>
                        <div><i className="bi-dot"></i>Убедитесь в целостности батута и наличии всех комплектующих</div>
                    </div>
                </div>

                <div className="ms-1 mt-3">
                    <h5>Паровоз:</h5>
                    <div className="ms-1 d-flex flex-column">
                        <div><i className="bi-dot"></i>Проверьте уровень бензина и рабочее состояние паровоза перед началом смены</div>
                        <div><i className="bi-dot"></i>При закрытии проверьте количество бензина на следующий день</div>
                    </div>
                </div>

                <div className="ms-1 mt-3 text-muted border-top pt-2">
                    <i className="bi-info-circle"></i> По окончании смены не забудьте забрать личные вещи и рабочее имущество.
                </div>
            </div>
        </div>
    )
}

export default Index