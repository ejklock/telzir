import React, { useState, useEffect } from 'react';
import { Modal, Button, Spinner, Table } from 'react-bootstrap';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import { Input, Select } from '../../components/Input';
import { fromArr, toArr } from '../../static/index';
import MainLayout from '../_layouts/main';
import Section from '../../components/Section';
import api from '../../services/api';
import Card from '../../components/Card';
import InputContainer from '../../components/InputContainer';

interface Plan {
  id: string;
  name: string;
  freeUntil: number;
}

interface EstimateCostRequest {
  from: string;
  to: string;
  minutes: number;
  plan: string;
}

interface EstimatedCost {
  from: string;
  to: string;
  withPlan: number;
  withoutPlan: number;
  saving: number;
  plan: Plan;
}
const Main: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [costs, setCosts] = useState<EstimatedCost>();

  const handleClose = () => {
    setShow(false);
    setCosts(undefined);
  };
  const handleShow = () => setShow(true);

  function getDescriptionText(plan: Plan) {
    switch (plan.freeUntil) {
      case 0:
        return 'Fale o valor da tarifa normal por minuto';

      default:
        return `Fale de graça até ${plan.freeUntil} minutos e só pague os minutos excedentes acrescidos de 10% do valor da tarifa normal `;
    }
  }

  async function getData() {
    const result = await api.get<Plan[]>('plan');
    if (result) {
      const { data } = result;
      setPlans(data);
    }
  }

  async function handleSubmit(formData: EstimateCostRequest) {
    setLoading(true);
    try {
      const result = await api.post<EstimatedCost>('estimate', formData);
      const { data } = result;
      setCosts(data);
    } catch (err) {
      const {
        response: {
          data: { message },
        },
      } = err;
      toast.error(message);
    }

    setLoading(false);
  }

  useEffect(() => {
    if (plans.length === 0) {
      getData();
    }
  }, [plans]);

  return (
    <>
      <MainLayout>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          size="lg"
          centered
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Simulação</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <p>
                Escolha os códigos da cidade origem e destino, plano e informe
                os minutos que deseja falar para calcular o custo
              </p>
              <InputContainer>
                <Select name="from">
                  <option value="0" defaultValue="0">
                    Selecione o DDD Origem
                  </option>
                  {fromArr?.map(f => (
                    <option key={f.from} value={f.from}>
                      {f.from}
                    </option>
                  ))}
                </Select>
                <Select name="to">
                  <option value="0" defaultValue="0">
                    Selecione o DDD Destino
                  </option>
                  {toArr?.map(f => (
                    <option key={f.to} value={f.to}>
                      {f.to}
                    </option>
                  ))}
                </Select>
                <Select name="planId">
                  <option value="0" defaultValue="0">
                    Selecione o Plano
                  </option>
                  {plans?.map((p: Plan) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </Select>
                <Input
                  name="minutes"
                  min="1"
                  type="number"
                  placeholder="Informe os Minutos"
                />
              </InputContainer>
              {loading ? (
                <Spinner animation="grow" />
              ) : costs ? (
                <Section padding="0px" title="Resultado" id="costs">
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Plano Fale Mais (Básico)</th>
                        <th>
                          Plano
                          {costs?.plan?.name}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          R$
                          {costs?.withoutPlan.toFixed(2)}
                        </td>
                        <td>
                          R$
                          {costs?.withPlan.toFixed(2)}
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th scope="row">Você Economiza</th>
                        <td>{costs?.saving.toPrecision(3)}%</td>
                      </tr>
                    </tfoot>
                  </Table>
                </Section>
              ) : (
                ''
              )}
            </Modal.Body>

            <Modal.Footer>
              <Button type="submit" variant="success">
                Calcular
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Fechar
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>

        <Section background="#f3f3f3" id="atelzir" title="A Telzir">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            mollis sapien. Duis ac dolor lorem. Phasellus tincidunt turpis ante,
            non iaculis nulla vestibulum et. Mauris eleifend, diam sit amet
            imperdiet pulvinar, velit neque tincidunt tortor, sed hendrerit
            mauris ipsum ut tortor. Maecenas interdum, arcu et ornare tincidunt,
            ante eros porta sapien, id facilisis lacus purus nec lectus. Aenean
            facilisis et erat sed tempus.
          </p>
          <p>
            Donec non mi cursus, lacinia ante vitae, lobortis dui. Aliquam
            scelerisque, libero vitae lobortis rutrum, leo tortor porta ex, id
            malesuada sem est et erat. Vivamus nulla elit, malesuada et faucibus
            pellentesque, viverra sit amet nunc. Proin porta a libero eget
            feugiat. In eleifend elit posuere, aliquam erat venenatis, aliquam
            mauris. Nam mattis viverra justo in hendrerit. Quisque eu aliquet
            arcu.
          </p>
        </Section>
        <Section id="nossosplanos" title="Nossos Planos">
          <Section direction="row" title="" id="plans">
            {plans?.map((plan: Plan) => (
              <Card key={plan.id}>
                <h3>{plan.name}</h3>
                <p>{getDescriptionText(plan)}</p>
                <button type="button" onClick={handleShow}>
                  Faça uma Simulação
                </button>
              </Card>
            ))}
          </Section>
        </Section>
      </MainLayout>
    </>
  );
};

export default Main;
