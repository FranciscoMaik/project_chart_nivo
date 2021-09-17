import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { Flex } from '@chakra-ui/react';


export const ChartLine: React.FC = () => {
    const d = [
        {
            'id': 'graficoum',
            'data': [
                { 'x': 'janeiro', 'y': 1 },
                { 'x': 'fevereiro', 'y': 50 },
                { 'x': 'março', 'y': 1 },
                { 'x': 'abril', 'y': 90 },
                { 'x': 'maio', 'y': 12 },
                { 'x': 'junho', 'y': 120 },
            ]
        }
      ];

    return (
        <Flex w="100%" h="400px">
            <ResponsiveLine
                //dados 
                data={d}
                //posição do gráfico
                margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                //tipo de dados do x
                xScale={{type: 'point'}}
                //tipo de dados do y
                yScale={{ type: 'linear' }}
                yFormat=" >-.2f"
                //curvatura da linha
                curve="basis"
                //valores das legendas de baixo
                axisBottom={{
                    tickSize:0,
                    tickPadding: 12,
                    tickRotation: -20,
                    
                }}
                //valores das legendas da esquerda
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Valores',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                //desativar ponto
                enablePoints={false}
                
                //estilização do ponto
                // pointSize={10}
                // pointColor={{ theme: 'background' }}
                // pointBorderWidth={2}
                // pointBorderColor={{ from: 'serieColor' }}
                // pointLabelYOffset={-12}
                
                //informações do ponto de intersecção
                useMesh={true}
                //ativar e desativar grid X
                enableGridX={false}
                //ativar e desativar grid Y
                enableGridY={false}
                //Tipo de linha de intersecção de pontos
                crosshairType="x"
                //preenchimento do fundo do gráfico
                enableArea={true}
                //Linha base de preencimento
                areaBaselineValue={0}
                //opacidade do preenchimento
                areaOpacity={1}
                //Gradiente
                defs={[{
                    id: 'gradientC',
                    type: 'linearGradient',
                    colors: [
                      { offset: 50, color: '#B6ECDE' },
                      { offset: 100, color: 'rgba(17, 35, 31, 0.88)' },
                    ],
                  },]}
                  fill={[
                    { match: '*', id: 'gradientC' },
                  ]}

                //espessura da linha
                lineWidth={0}
                //configurações da legenda
                // legends={[
                //     {
                //         anchor: 'bottom-right',
                //         direction: 'column',
                //         justify: false,
                //         translateX: 100,
                //         translateY: 0,
                //         itemsSpacing: 0,
                //         itemDirection: 'left-to-right',
                //         itemWidth: 80,
                //         itemHeight: 20,
                //         itemOpacity: 0.75,
                //         symbolSize: 12,
                //         symbolShape: 'circle',
                //         symbolBorderColor: 'rgba(0, 0, 0, .5)',
                //         effects: [
                //             {
                //                 on: 'hover',
                //                 style: {
                //                     itemBackground: 'rgba(0, 0, 0, .03)',
                //                     itemOpacity: 1
                //                 }
                //             }
                //         ]
                //     }
                // ]}
            />
        </Flex>
    )
}