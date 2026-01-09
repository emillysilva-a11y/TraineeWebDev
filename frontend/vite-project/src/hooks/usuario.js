import { useQuery, useMutation } from "@tanstack/react-query"
import { GetUsers, CreateUser, UpdateUser, DeleteUser } from "../services/endpoints"

export function useGetUser({onSuccess = () => {}, onError = () => {} } = {}) {
    return useQuery({ queryKe:["users"],queryfn: GetUsers, onSuccess, onError})
}

export function useCreateUser({onSuccess = () => {}, onError = () => {} } = {}) {
    return useMutation({ mutationFn: CreateUser, onSuccess, onError})
}

export function useUpsdateUser({onSuccess = () => {}, onError = () => {} } = {}) {
    return useMutation({ mutationFn: UpdateUser, onSuccess, onError})
}

export function useDeleteUser({onSuccess = () => {}, onError = () => {} } = {}) {
    return useMutation({ mutationFn: DeleteUser, onSuccess, onError})
}