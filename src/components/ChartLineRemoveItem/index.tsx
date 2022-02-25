import React, { useMemo, useState } from 'react';
import { useOrdinalColorScale, getOrdinalColorScale } from "@nivo/colors";
import { ResponsiveLine } from '@nivo/line';
import { Flex } from '@chakra-ui/react';
import {data as dataR} from './data'


export const ChartLineRemoveItem: React.FC = () => {
    const [hiddenIds, setHiddenIds] = useState<string[]>([]);
    const [colorsItem, setColorsItem] = useState<string[]>([]);


    console.log("💻 ~ file: index.tsx ~ line 10 ~ hiddenIds", hiddenIds)
    const data = useMemo(
        () => dataR.filter((item) => !hiddenIds.includes(item.id)),
        [hiddenIds]
    );

    // const colors = useOrdinalColorScale({scheme: "accent"}, "id");

    const colors = data.map((item) => item.color)
    


    return (
        <Flex w="100%" h="400px">
            <ResponsiveLine 
                data={data}
                colors={colors}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    ticksPosition:"before",
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    ticksPosition: "after",
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                animate
                legends={[
                    {
                        anchor: 'bottom-right',
                        data: dataR.map((item,index) => {
                            // const color = colors(item);
                            const color = item.color;
                
                            return {
                              color: hiddenIds.includes(item.id) ? "rgba(1, 1, 1, .1)" : color,
                              id: item.id,
                              label: item.id
                            };
                          }),
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        onClick: (d) => {
                            setHiddenIds((state) =>
                            state.includes(String(d.id))
                                ? state.filter((item) => item !== d.id)
                                : [...state, String(d.id)]
                            );
                        },
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </Flex>
    )
}