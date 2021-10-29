import sys
import os
import json
import operator

def abrirArchivo(rutaArchivo):
    try:
        # Abrir el archivo de entrada
        f = open (rutaArchivo, 'r');
        data = json.load(f)
        return data
    except:
        sys.exit("Error: Revisa la ruta/nombre de tu archivo")

def imprimirTareas(listaTareas):
    tareasOrdendas = sorted(listaTareas, key=operator.itemgetter('puntuacion'), reverse=True)
    for tarea in tareasOrdendas:
        print(tarea['nombre'])

def main():
    # Abrir archivo de entrada
    ruta = sys.argv[1]
    listaTareas = abrirArchivo(ruta)
    # Verificar entrada del archivo
    for tarea in listaTareas:
        if(not(('nombre' in tarea) and ('puntuacion' in tarea))):
            sys.exit("Error: Revisa los parametros de tu archivo")
    # Definir lista de tareas falantes
    tareasFaltantes = sorted(listaTareas, key=operator.itemgetter('puntuacion'), reverse=True)
    print("\nA continuacion se enlistan las tareas, ordenadas de manera descendente:\n")
    imprimirTareas(tareasFaltantes)
    # Variables para el ciclo de tareas
    tareasCompletadas = list()
    salir = ''
    while (salir.lower() != 's' and len(tareasFaltantes) > 0):
        tareasFaltatesAux = tareasFaltantes.copy()
        tareasFaltantes = list()
        # Preguntar si las tareas ya fueron completadas
        print("\nEscriba \"Y\", si fue completada, o \"N\", si no ha sido completada:\n")
        cont = 0
        while (len(tareasFaltatesAux) > 0):
            tareaActual = tareasFaltatesAux.pop(0)
            tecla = input("Tarea => "+tareaActual['nombre']+": ")
            tecla = tecla.lower()
            if(tecla == "y"):
                tareasCompletadas.append(tareaActual)
                cont += 1
            elif(tecla == "n"):
                tareasFaltantes.append(tareaActual)
                cont += 1
            else:
                print("OPCION NO ACEPTADA, INTENTE DE NUEVO")
                tareasFaltatesAux.insert(0,tareaActual)
        # Imprimir tareas completadas / faltantes
        print("\nTAREAS COMPLETADAS")
        imprimirTareas(tareasCompletadas)
        print("\nTAREAS FALTANTES")
        imprimirTareas(tareasFaltantes)
        # Opcion de terminar el programa
        if(len(tareasFaltantes) > 0):
            salir = input("\nPresione \"S\", si desea salir, cualquier otra tecla para continuar: ")
            os.system('clear')
    # Terminar programa
    print("Gracias por usar el programa\nTareas Completadas:\n")
    imprimirTareas(tareasCompletadas)
    sys.exit()

if __name__ == '__main__':
    main()