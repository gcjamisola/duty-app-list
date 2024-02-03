import ApiWrapper from "./ApiWrapper"

class DutyApi {
    static getDuties() {
        return ApiWrapper({
            url: `/duties`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    static createDuty(name: string) {
        return ApiWrapper({
            url: `/duties`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: { name }
        })
    }

    static updateDuty(id: number, body: object) {
        return ApiWrapper({
            url: `/duties/${id}`,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            data: body
        })
    }

    static deleteDuty(id: number) {
        return ApiWrapper({
            url: `/duties/${id}`,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
}

export default DutyApi