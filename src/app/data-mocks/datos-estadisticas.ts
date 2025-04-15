export const estadisticas = [
    {
      id: 1,
      producto: 'Auriculares',
      cantidad: 5,
      precio: 120,
      fecha: '2024-01-15',
      basicData: {
        labels: ['Enero', 'Febrero', 'Marzo'],
        datasets: [
          {
            label: 'Ventas mensuales',
            backgroundColor: '#42A5F5',
            data: [5, 7, 6]
          },
          {
            label: 'Devoluciones',
            backgroundColor: '#FFA726',
            data: [0, 1, 0]
          }
        ]
      },
      data: {
        labels: ['Auriculares', 'Otros'],
        datasets: [
          {
            data: [600, 2400],
            backgroundColor: ["#42A5F5", "#FFA726"],
            hoverBackgroundColor: ["#64B5F6", "#FFB74D"]
          }
        ]
      }
    },
    {
      id: 2,
      producto: 'Teclado',
      cantidad: 2,
      precio: 80,
      fecha: '2024-01-22',
      basicData: {
        labels: ['Enero', 'Febrero', 'Marzo'],
        datasets: [
          {
            label: 'Ventas mensuales',
            backgroundColor: '#42A5F5',
            data: [2, 3, 4]
          },
          {
            label: 'Devoluciones',
            backgroundColor: '#FFA726',
            data: [0, 0, 1]
          }
        ]
      },
      data: {
        labels: ['Teclado', 'Otros'],
        datasets: [
          {
            data: [160, 3340],
            backgroundColor: ["#42A5F5", "#66BB6A"],
            hoverBackgroundColor: ["#64B5F6", "#81C784"]
          }
        ]
      }
    },
    {
      id: 3,
      producto: 'Mouse',
      cantidad: 10,
      precio: 35,
      fecha: '2024-02-10',
      basicData: {
        labels: ['Enero', 'Febrero', 'Marzo'],
        datasets: [
          {
            label: 'Ventas mensuales',
            backgroundColor: '#42A5F5',
            data: [12, 10, 8]
          },
          {
            label: 'Devoluciones',
            backgroundColor: '#FFA726',
            data: [1, 0, 2]
          }
        ]
      },
      data: {
        labels: ['Mouse', 'Otros'],
        datasets: [
          {
            data: [350, 3150],
            backgroundColor: ["#FFA726", "#66BB6A"],
            hoverBackgroundColor: ["#FFB74D", "#81C784"]
          }
        ]
      }
    },
    {
      id: 4,
      producto: 'Monitor',
      cantidad: 1,
      precio: 300,
      fecha: '2024-02-18',
      basicData: {
        labels: ['Enero', 'Febrero', 'Marzo'],
        datasets: [
          {
            label: 'Ventas mensuales',
            backgroundColor: '#42A5F5',
            data: [1, 2, 1]
          },
          {
            label: 'Devoluciones',
            backgroundColor: '#FFA726',
            data: [0, 0, 0]
          }
        ]
      },
      data: {
        labels: ['Monitor', 'Otros'],
        datasets: [
          {
            data: [300, 2500],
            backgroundColor: ["#42A5F5", "#FFA726"],
            hoverBackgroundColor: ["#64B5F6", "#FFB74D"]
          }
        ]
      }
    },
    {
      id: 5,
      producto: 'Parlantes',
      cantidad: 3,
      precio: 150,
      fecha: '2024-03-02',
      basicData: {
        labels: ['Enero', 'Febrero', 'Marzo'],
        datasets: [
          {
            label: 'Ventas mensuales',
            backgroundColor: '#42A5F5',
            data: [2, 4, 3]
          },
          {
            label: 'Devoluciones',
            backgroundColor: '#FFA726',
            data: [0, 1, 0]
          }
        ]
      },
      data: {
        labels: ['Parlantes', 'Otros'],
        datasets: [
          {
            data: [450, 1800],
            backgroundColor: ["#FFA726", "#66BB6A"],
            hoverBackgroundColor: ["#FFB74D", "#81C784"]
          }
        ]
      }
    },
    {
      id: 6,
      producto: 'Webcam',
      cantidad: 4,
      precio: 90,
      fecha: '2024-03-25',
      basicData: {
        labels: ['Enero', 'Febrero', 'Marzo'],
        datasets: [
          {
            label: 'Ventas mensuales',
            backgroundColor: '#42A5F5',
            data: [3, 4, 5]
          },
          {
            label: 'Devoluciones',
            backgroundColor: '#FFA726',
            data: [0, 1, 0]
          }
        ]
      },
      data: {
        labels: ['Webcam', 'Otros'],
        datasets: [
          {
            data: [360, 2100],
            backgroundColor: ["#42A5F5", "#FFA726"],
            hoverBackgroundColor: ["#64B5F6", "#FFB74D"]
          }
        ]
      }
    },
    {
      id: 7,
      producto: 'Notebook',
      cantidad: 1,
      precio: 1200,
      fecha: '2024-04-05',
      basicData: {
        labels: ['Febrero', 'Marzo', 'Abril'],
        datasets: [
          {
            label: 'Ventas mensuales',
            backgroundColor: '#42A5F5',
            data: [0, 1, 2]
          },
          {
            label: 'Devoluciones',
            backgroundColor: '#FFA726',
            data: [0, 0, 0]
          }
        ]
      },
      data: {
        labels: ['Notebook', 'Otros'],
        datasets: [
          {
            data: [1200, 1800],
            backgroundColor: ["#66BB6A", "#FFA726"],
            hoverBackgroundColor: ["#81C784", "#FFB74D"]
          }
        ]
      }
    },
    {
      id: 8,
      producto: 'Tablet',
      cantidad: 2,
      precio: 450,
      fecha: '2024-05-13',
      basicData: {
        labels: ['Marzo', 'Abril', 'Mayo'],
        datasets: [
          {
            label: 'Ventas mensuales',
            backgroundColor: '#42A5F5',
            data: [2, 1, 2]
          },
          {
            label: 'Devoluciones',
            backgroundColor: '#FFA726',
            data: [0, 0, 1]
          }
        ]
      },
      data: {
        labels: ['Tablet', 'Otros'],
        datasets: [
          {
            data: [900, 2100],
            backgroundColor: ["#42A5F5", "#66BB6A"],
            hoverBackgroundColor: ["#64B5F6", "#81C784"]
          }
        ]
      }
    },
    {
      id: 9,
      producto: 'Impresora',
      cantidad: 1,
      precio: 220,
      fecha: '2024-06-07',
      basicData: {
        labels: ['Abril', 'Mayo', 'Junio'],
        datasets: [
          {
            label: 'Ventas mensuales',
            backgroundColor: '#42A5F5',
            data: [1, 2, 1]
          },
          {
            label: 'Devoluciones',
            backgroundColor: '#FFA726',
            data: [0, 0, 0]
          }
        ]
      },
      data: {
        labels: ['Impresora', 'Otros'],
        datasets: [
          {
            data: [220, 2780],
            backgroundColor: ["#FFA726", "#66BB6A"],
            hoverBackgroundColor: ["#FFB74D", "#81C784"]
          }
        ]
      }
    },
    {
      id: 10,
      producto: 'Cargador',
      cantidad: 8,
      precio: 25,
      fecha: '2024-06-28',
      basicData: {
        labels: ['Mayo', 'Junio', 'Julio'],
        datasets: [
          {
            label: 'Ventas mensuales',
            backgroundColor: '#42A5F5',
            data: [7, 8, 6]
          },
          {
            label: 'Devoluciones',
            backgroundColor: '#FFA726',
            data: [0, 1, 0]
          }
        ]
      },
      data: {
        labels: ['Cargador', 'Otros'],
        datasets: [
          {
            data: [200, 1500],
            backgroundColor: ["#42A5F5", "#FFA726"],
            hoverBackgroundColor: ["#64B5F6", "#FFB74D"]
          }
        ]
      }
    }
  ];